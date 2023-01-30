
# 清除文件
# .PHONY: clean
# clean:
# 	rm public/test.wasm src/webAssemblyJs/test.mjs

public/test.wasm: src/webAssemblyJs/test.mjs
src/webAssemblyJs/test.mjs: cCode/test.c
	emcc --no-entry cCode/test.c -o src/webAssemblyJs/test.mjs  \
	  --pre-js src/locateFile.js  \
	  -s ENVIRONMENT='web'  \
	  -s EXPORT_NAME='webAssemblyModule'  \
	  -s USE_ES6_IMPORT_META=0  \
	  -s EXPORTED_FUNCTIONS=_add,_multiply  \
	  -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'  \
	  -O3
	mv src/webAssemblyJs/test.wasm public/test.wasm
