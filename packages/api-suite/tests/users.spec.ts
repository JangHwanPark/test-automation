import { test, expect } from '@playwright/test';

test.describe('GET /api/users', () => {
  test('유저 목록을 200 으로 반환한다', async ({ request }) => {
    const response = await request.get('/api/users');

    expect(response.status()).toBe(200);

    const users = await response.json();
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        email: expect.any(String),
      }),
    );
  });
});

test.describe('GET /api/users/:id', () => {
  test('존재하지 않는 id 는 404 를 반환한다', async ({ request }) => {
    const response = await request.get('/api/users/999');
    expect(response.status()).toBe(404);
  });

  test.skip('존재하는 id 는 해당 유저를 반환한다', async ({ request }) => {
    // TODO: request.get('/api/users/1') → status 200, body.id === 1
  });
});

test.describe('POST /api/users', () => {
  test('정상 생성 시 201 을 반환한다', async ({ request }) => {
    const response = await request.post('/api/users', {
      data: { name: 'Charlie', email: 'charlie@example.com' },
    });

    expect(response.status()).toBe(201);

    const created = await response.json();
    expect(created).toEqual(
      expect.objectContaining({
        name: 'Charlie',
        email: 'charlie@example.com',
      }),
    );
  });

  test.skip('name/email 누락 시 400 을 반환한다', async ({ request }) => {
    // TODO: request.post('/api/users', { data: {} }) → status 400
  });
});
