// 导入emscripten.h这个库（用关键字）EMSCRIPTEN_KEEPALIVE 定义的函数视为自定义函数。
#include <emscripten/emscripten.h>
#include <stdlib.h>

EMSCRIPTEN_KEEPALIVE int add(int a, int b)
{
  return a + b;
}