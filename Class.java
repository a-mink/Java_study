package java_basics;

/*
Class
-> 필드와 메소드로 이루어짐.
- Field 클래스의 속성 -> 클래스가 가지고 있는 것들
- Method 클래스의 기능, 행위

- 클래스 선언 방법
접근제한자(public, protected, (x), private) class 클래스이름 {
 	필드들;
 	
 	생성자들; // 클래스명 변수명 = new 클래스명(); == 참조타입 참조변수 = new연산자 생성자;
 	
 	메소드들; // static이 붙은 메소드 = 클래스 메소드. (-> 인스턴스 생성하지 않고도 사용가능(메모리에 올라가 있어 인스턴스 메모리에 올라가 실행하지 않아도 된다).) 
 	// [접근제한자] [static] 리턴type 메소드이름([매개변수(parameter-메소드를 호출할 때 전달되는 실제 값), ... ]){
 	 	* 실행문
 		}
 
Object

Instance
- 인스턴스를 만드는 3가지 방법
1. new 연산자와 생성자를 이용하여 인스턴스를 만드는 방법
2. 클래스 로더를 이용하는 방법 -> spring 등 프레임워크 에서
3. 메모리에 있는 인스턴스를 복제(Clone)하여 만드는 방법

Reference Variable

*/

public class Class {
	public static void main(String[] args) {
		VendingMachine vm1 = new VendingMachine();
		VendingMachine vm2 = new VendingMachine(); // 자판기가 필요한 수 만큼 자판기 인스턴스를 생성해야 한다.
	
		String product = vm1.pushProductButton(100);
		System.out.println(product);
		vm2.printVersion(); // static한 메소드 호출 방법 : 레퍼런스변수명.static메소드() -> 바람직하지는 않다.

	}
}

//메소드가 실행되는 원리 강의
//https://www.youtube.com/watch?v=qP5zUFemWrU&list=PLHpaQi-LiUCx-vcbcnpU5Tzv2X99WCowN&index=26
//터미널에서(JVM으로) 파일 실행 방법
//1. 관련 파일들을 컴파일 한다.
//- javac VendingMachine.java
//- javac VendingMachineMain.java
//2. 원하는 파일을 실행한다.
//- java VendingMachineMain 
//--> JVM이 파일을 실행할 때, CLASSPATH 경로에서 해당 클래스를 찾아서 실행함. 
//	(그 후 읽어드린 '클래스 정보'를 PERM 이라는 메모리 영역에 저장. -> main 메소드를 찾아 실행하게 됨.)
//--> 현재 경로를 찾아 실행할 때는 CLASSPATH . 으로 ( . 이 현재 경로를 나타내는 것이라고 생각하면 됨.)