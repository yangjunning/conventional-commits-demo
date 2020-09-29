import plus from '../index';
// 通过比对转换后的结果，得出测试结果
test('transform jsx to json', () => {
  expect(plus()).toBe(2);
});
