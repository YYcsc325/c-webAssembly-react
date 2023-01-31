#include <emscripten/emscripten.h>
#include <stdlib.h>

EMSCRIPTEN_KEEPALIVE int add(int a, int b)
{
  return a + b;
}

EMSCRIPTEN_KEEPALIVE int multiply(int a, int b)
{
  return a * b;
}