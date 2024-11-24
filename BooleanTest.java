package java_basics;
// 기본형 타입  : 특정 메모리를 가지고, 그 안에 값을 저장함. 모두 소문자로 시작.
// int, short(2byte), long(8byte) : 정수
// float, double : 실수
// char : 문자 1개
// boolean(1byte) : 참(true) or 거짓(false)
// -> 초기화하지 않으면 기본적으로 false값. 메소드 안에서는 (지역)변수를 선언한 후 초기화하지 않고 사용하면
// [ java: variable 변수명 might not have been initialized ] 와 같은 오류가 발생한다.

// 레퍼런스 타입 (기본형이 아닌 타입) : 값을 참조 대부분 대문자로 시작 (ex) class, interface 등

/* 비교 연산자 : ==, !=, <, >, <=, >=
 * 논리 연산자 : &&(and), ||(or), &, |, ^(XOR, 배타적 논리합), !(거짓-> 참, 참-> 거짓)
 *
 */

public class BooleanTest {
	public static void main(String[] args) {
		boolean flag1 = false;
		boolean flag2 = false;
		boolean flag3 = false;
		boolean flag4 = false;
		boolean flag5 = false;
		boolean flag6 = false;
		
		flag1 = 10 > 5 && 5 < 20; // &와 똑같지만, 첫번째 항목이 False가 나오면 뒷 항목은 연산하지 않고 넘어감.
		flag2 = 10 > 5 & 5 < 20; // &&와 똑같지만, 첫번째 항목이 False여도 뒷 항목을 연산.
		flag3 = 10 >= 10 || 5 > 6; // |(or)과 똑같지만, 첫번째 항목이 False이면, 뒷 항목은 연산하지 않고 넘어감.
		flag4 = 10 >= 10 | 5 > 6; // ||와 같지만, 첫번째 항목이 False여도, 뒷 항목을 연산.
		flag5 = 10 == 10 ^ 5 == 4; // 
		flag6 = !flag5;
		
		System.out.println(flag1); // true
		System.out.println(flag2); // true
		System.out.println(flag3); // true
		System.out.println(flag4); // true
		System.out.println(flag5); // true
		System.out.println(flag6); // false
	}
}