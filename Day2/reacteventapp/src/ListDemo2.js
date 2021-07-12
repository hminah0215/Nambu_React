// useState 를 반드시 참조한다.
import React, { useState } from "react";

const ListDemo2 = () => {
  // STEP1. 데이터 구조를 설계하고 값을 초기화 한다.

  // 상품목록 데이터 State 정의 및 초기화
  const [products, setProducts] = useState([
    { pid: 1, productName: "삼성노트북", price: 5000, provider: "삼성전자", stock: 100 },
    { pid: 2, productName: "LG노트북", price: 15000, provider: "LG", stock: 200 },
    { pid: 3, productName: "HP노트북", price: 6000, provider: "HP", stock: 300 },
    { pid: 4, productName: "ASUS노트북", price: 4000, provider: "ASUS", stock: 400 },
  ]);

  // 단일 상품정보 정의 및 초기화
  const [product, setProduct] = useState([
    { pid: 0, productName: "", price: 0, provider: "", stock: 0 },
  ]);

  // 상품번호 자동 채번 정보
  const [nextId, setNextId] = useState(5);

  // STEP3: 각종이벤트 처리기를 구현한다.

  const onProductChange = (e) => {
    // ... spread 연산자를 이용해 product 객체의 복사본을 만들고
    // 복사본의 속성을 ui 요소의 name 값으로 지정하고 값은 ui 요소의 value 값으로 세팅해서
    // 신규 제품데이터 정보를 생성한다.
    const newProduct = { ...product, [e.target.name]: e.target.value };

    // 신규 제품 정보로 기본 상품정보를 업데이트 한다.
    setProduct(newProduct);

    console.log(newProduct);
  };

  const onSaveProduct = (e) => {
    // 배열.concat() 메소드는 배열에 신규아이템을 추가할때 사용한다.
    const newProductList = products.concat({ ...product, pid: nextId });

    // 신규아이템이 추가된 신규배열로 제품목록정보를 업데이트한다.
    setProducts(newProductList);

    // 다음번호 미리 생성하기
    setNextId(nextId + 1);
  };

  return (
    // Step 2. 화면을 설계한다.
    <div>
      {/* input name 속성값은 해당하는 프로퍼티값의 이름과 동일하도록! */}
      제품명 :
      <input
        type="text"
        name="productName"
        value={product.productName}
        onChange={onProductChange}
      />
      <br></br>
      가격 : <input type="text" name="price" value={product.price} onChange={onProductChange} />
      <br></br>
      제조사 :
      <input type="text" name="provider" value={product.provider} onChange={onProductChange} />
      <br></br>
      재고수량 :
      <input type="text" name="stock" value={product.stock} onChange={onProductChange} />
      <br></br>
      <button onClick={onSaveProduct}>저장</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>제품번호</th>
            <th>제품명</th>
            <th>공급업체</th>
            <th>가격</th>
            <th>재고수량</th>
          </tr>
        </thead>
        <tbody>
          {/* 배열값을 반복해서 제어할때는 배열.map() 메소드를 이용해 제어한다. */}
          {/* map을 사용해서 ui를 반복표현하는 경우 반드시 key 속성에 유니크한 값을 설정해줘야한다.<tr key={product.pid}> 
          동일 컴포넌트내에서 배열의 키 설정값은 중복되면 안된다! unique!! */}
          {products.map((product) => (
            <tr key={product.pid}>
              <td>{product.pid}</td>
              <td>{product.productName}</td>
              <td>{product.provider}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDemo2;
