
import { http, HttpResponse } from 'msw';
/**
 * @description mock api 사용을 위한 handler
 * @type {*[]}
 * @example
 * rest.post('/api', (req, res, ctx) => {
 *     return res(
 *       ctx.status(500),
 *      ctx.json({
 *        errorMessage: 'Invalid Input',
 *      }),
 *     );
 *   }),
 */

export const handlers = [
  http.get('http://localhost:3000/api/answer/create', async ({ request, params, cookies }) => {
    return HttpResponse.json(
      {
        message: 'Mocked response',
      },
      {
        status: 202,
        statusText: 'Mocked status',
      }
    );
  }),
];

