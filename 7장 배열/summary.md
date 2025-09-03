# 배열
- 배열의 최대 길이 2^32-2 이며, 동적으로 길이가 변한다.
- sparse array를 허용하여 index 사이의 갭이 있어도 된다.
- 자바스크립트 배열은 요소로 객체를 허용하며, 요소별 타입이 달라도 된다.

## 배열 생성 방법
- 배열 리터럴
- 이터러블 객체에 분해 연산자 ... 적용
- Array() 생성자
- Array.of(), Array.from()의 팩토리 메서드
## 배열 접근
숫자는 문자열로 바뀌어서 프로퍼티 이름을 찾는 []방식을 사용한다.
## 배열 원소 추가/제거
- push(), pop(), delete
- delete를 사용한다고 해서 length프로퍼티 값이 변하지 않는다.
## 배열 순회
- for/of 또는 forEach()를 사용한다.
- forEach는 메서드다.
## 배열 메서드
### 배열 이터레이터 메서드: function(v, i, a)
함수를 첫번째 인자로 받으며, 그 함수의 인자는 배열 요소(v), 인덱스(i), 배열 자체(a)다.
- forEach()
- map(): forEach()와 달리 값을 반환해야 한다.
- filter(): boolean값을 반환하는 함수, truthy한 값이 반환되었을 때만 새로운 배열에 추가된다.
- find()/findIndex()는 첫 truthy 값이 반환되면 동작을 멈추고 원소/원소의 인덱스를 반환한다.
- every(), some()
- reduce(): 배열의 값을 하나로 줄인다. reduceRight()도 있으며, 함수의 인자는 누적된 결괏값, 값, 인덱스, 배열 순서이다.
```js
a.reduce((function(acc, v, i, a) {acc += v; return acc;}, v_0));
```
- flat(b): b 번 평탄화를 a에 적용하여 반환한다.
- flatMap(): map 이후 자동으로 flat([]를 제거한다.)을 진행한다.
- concat(): 배열을 이어 붙일 때 사용하며, 1단계 평탄화가 적용된다.
- push(): 기존 배열을 수정하며, 여러 요소를 한번에 넣고 싶을 때는 ...을 사용하자.
- unshift(), shift(): push, pop과 달리 배열의 앞에 원소를 추가/삭제한다.
- slice(a, b): [a, b)를 반환한다.
- splice(a, len, n1, n2 ...): a를 시작 위치로 해서 길이 len만큼을 제거하고 n1, n2..를 a위치에 추가한다. 기존 배열의 수정한다.
- fill(v, a, b): [a, b)를 값 v로 채운다. 기존 배열을 수정한다.
- copyWithin(start, a, b): [a, b)를 슬라이스 한 값을 start 인덱스부터 붙여넣으며, 길이는 수정되지 않는다.
### 배열 검색과 정렬 메서드
- indexOf(v, i), lastIndexOf(v, i): 값 v의 첫 번째 위치를 반환한다. i는 검색을 시작할 위치다. 비교 연산자로 ===을 사용한다.
- includes(v): v를 포함하는지 체크하며, v가 NaN이어도 가능하다.
- sort(function(l, r)): function은 원소 두 개를 받고 먼저 오는 값이 l일 때 0보다 작은 값을 반환한다.
- revrse(): reverse()
- join(s): 배열의 원소를 구분 문자열을 s로 해서 하나의 문자열로 바꾼다.
### 배열 정적 메서드
- isArray()


