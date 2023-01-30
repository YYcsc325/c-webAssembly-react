import React from "react";
import { InputNumber, Button } from 'antd';
import webAssemblyModule from "../webAssemblyJs/test.mjs";

const WebAssembly = () => {
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [result, setResult] = React.useState(undefined);
  const [addSum, setAddSum] = React.useState();

  React.useEffect(
    () => {
      /** 调用js胶水代码 */
      webAssemblyModule().then((Module) => {
        setAddSum(() => Module.cwrap("add", "number", ["number", "number"]));
      });
    },
    []
  );

  if (!addSum) return "正在加载 webassembly Module...";

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      数值：<InputNumber style={{ width: 200 }} value={value1} onChange={(value) => {
        setValue1(value)
      }} /> + 数值：<InputNumber style={{ width: 200 }} value={value2} onChange={(value) => {
        setValue2(value)
      }} /> <Button style={{ width: 100, marginLeft: 10, marginRight: 10 }} onClick={() => {
        setResult(addSum(value1, value2))
      }}>点击计算</Button>  计算结果：{result}
    </div>
  );
}

export default WebAssembly;
