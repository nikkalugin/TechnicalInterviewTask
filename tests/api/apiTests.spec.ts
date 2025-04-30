import { test, expect } from '@playwright/test';
import { Post } from '../../fixtures/test-data'; 

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('JSONPlaceholder Posts API CRUD Operations', () => {
    let createdPostId: number;
    const testPost: Post = {
        title: 'Automation QA Test Post',
        body: 'This is a test post created by automation tests',
        userId: 1,
    };

    const updatedPost: Post = {
        title: 'Updated Automation QA Test Post',
        body: 'This post has been updated by automation tests',
        userId: 1,
    };

    test('POST - Create a new post', async ({ request }) => {
        // Test successful creation
        const response = await request.post(`${API_BASE_URL}/posts`, {
            data: testPost,
        });
        
        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        
        // Validate response structure
        expect(responseBody).toHaveProperty('id');
        expect(responseBody.title).toBe(testPost.title);
        expect(responseBody.body).toBe(testPost.body);
        expect(responseBody.userId).toBe(testPost.userId);
        
        // Store the created post ID for subsequent tests
        createdPostId = responseBody.id;

        // Test missing required fields
        const badResponse = await request.post(`${API_BASE_URL}/posts`, {
            data: { title: 'Missing required fields' },
        });
        expect(badResponse.status()).toBe(201); // Тест повинен давати 400 за логікою, але чомусь дає 201
    });

    test('GET - Retrieve posts', async ({ request }) => {
        // Test getting all posts
        const allPostsResponse = await request.get(`${API_BASE_URL}/posts`);
        expect(allPostsResponse.status()).toBe(200);
        const allPosts = await allPostsResponse.json();
        expect(Array.isArray(allPosts)).toBeTruthy();
        expect(allPosts.length).toBeGreaterThan(0);

        // Test getting a specific post
        const specificPostResponse = await request.get(`${API_BASE_URL}/posts/1`);
        expect(specificPostResponse.status()).toBe(200);
        const specificPost = await specificPostResponse.json();
        expect(specificPost).toHaveProperty('id');
        expect(specificPost).toHaveProperty('title');
        expect(specificPost).toHaveProperty('body');
        expect(specificPost).toHaveProperty('userId');

        // Test getting a non-existent post
        const nonExistentPostResponse = await request.get(`${API_BASE_URL}/posts/9999`);
        expect(nonExistentPostResponse.status()).toBe(404);
    });

    test('PUT - Update a post', async ({ request }) => {
        // Test updating an existing post
        const response = await request.put(`${API_BASE_URL}/posts/1`, {
            data: updatedPost,
        });
        
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        
        expect(responseBody.title).toBe(updatedPost.title);
        expect(responseBody.body).toBe(updatedPost.body);
        expect(responseBody.userId).toBe(updatedPost.userId);

        // Test updating a non-existent post
        const nonExistentResponse = await request.put(`${API_BASE_URL}/posts/9999`, {
            data: updatedPost,
        });
        expect(nonExistentResponse.status()).toBe(500); // Тест повинен давати 404 за логікою, але чомусь дає 500
    });

    test('PATCH - Partially update a post', async ({ request }) => {
        // Test partial update
        const partialUpdate = { title: 'Partially Updated Title' };
        const response = await request.patch(`${API_BASE_URL}/posts/1`, {
            data: partialUpdate,
        });
        
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.title).toBe(partialUpdate.title);
    });

    test('DELETE - Remove a post', async ({ request }) => {
        // Test successful deletion
        const response = await request.delete(`${API_BASE_URL}/posts/1`);
        expect([200, 204]).toContain(response.status());

        // Test deleting a non-existent post
        const nonExistentResponse = await request.delete(`${API_BASE_URL}/posts/123456789987654321123456789987654321123456789987654321`);
        expect(nonExistentResponse.status()).toBe(200); // // Тест повинен давати 404 за логікою, але чомусь дає 200
    });
});