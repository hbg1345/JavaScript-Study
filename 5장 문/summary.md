# Statement
표현식은 평가를 통해 값으로 바뀌고, 문은 실행을 통해 동작을 수행한다.
## 빈 문
;로 만들 수 있다.
## switch
===를 기준으로 매칭을 판단한다.
## do/while
do {} while(); body를 최소 한 번 실행해야 할 때 사용하며, 세미콜론이 필수다.
## for/of
for of 를 통해서 배열, 셋, 문자열, 맵 등의 이터러블 객체를 동적으로 순회할 수 있다.
## for/in
일반적인 객체의 프로퍼티를 순회할 때 사용할 수 있으나, 자바스크립트에서 정의하는 내장 메서드는 열거하지 않는다.
## label
어떤 문이든 앞에 라벨을 붙일 수 있으며, continue를 통해 그 라벨에 해당하는 문으로 점프할 수 있다.
break label을 통해서 해당 label이 붙은 문 블록에서 빠져나갈 수 있다.
## try/catch/finally
```js
try {} catch(e){} finally{}
```
위에서 catch와 finally는 둘 중 하나만 써도 되며, catch는 try문에서 예외가 발생했을 때 진입한다. finally의 바디는 항상 실행되며, 실행 순서는 try->정상 실행->finally->try 바디 탈출, 또는 try->예외발생->가장 가까운 catch로 점프 후 finally 실행이다. finally에서 발생한 예외는 모든 예외에 대해 우선권을 갖는다.

## debugger
중단점 역할을 한다.
## use strict
스트릭트 모드에서 코드가 실행되게 한다. 에러 발생 등에 대해 조금 더 엄격한 규칙을 가진다.
