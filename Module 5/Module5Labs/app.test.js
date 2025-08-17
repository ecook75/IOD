const request = require('supertest');
const app = require('./app');

describe('Calculator Routes', () => {
  // keep random but non-zero denominator
  const number1 = Math.floor(Math.random() * 1_000_000);
  const number2 = Math.max(1, Math.floor(Math.random() * 1_000_000)); // avoid 0

  test('GET /calculator/add => sum of numbers', async () => {
    const res = await request(app)
      .get(`/calculator/add?num1=${number1}&num2=${number2}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(res.body).toEqual({ result: number1 + number2 });
  });
test('GET /calculator/subtract => difference of numbers', async () => {
    const res = await request(app)
      .get(`/calculator/subtract?num1=${number1}&num2=${number2}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(res.body).toEqual({ result: number1 - number2 });
  });

  test('GET /calculator/divide => fraction of numbers', async () => {
    const res = await request(app)
      .get(`/calculator/divide?num1=${number1}&num2=${number2}`)
      .expect('Content-Type', /json/)
      .expect(200);

    // use closeTo in case either becomes float
    expect(res.body.result).toBeCloseTo(number1 / number2, 10);
  });

  test('GET /calculator/multiply => product of numbers', async () => {
    const res = await request(app)
      .get(`/calculator/multiply?num1=${number1}&num2=${number2}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(res.body).toEqual({ result: number1 * number2 });
  });
});