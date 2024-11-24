package java_basics;

/*
디버그 모드
- 한 줄씩 실행 순서와 결과를 보고 싶을 때 사용.
- 샤용 방법 : 멈춰서 결과를 보고 싶은 줄에 커서를 놓고 클릭 -> 디버깅 모드로 실행

for 반복문 사용 방법
- 문법
for (변수의 초기화; 탈출조건식; 증감식) {
	탈출 조건식이 참인 경우 실행되는 부분.
	}
- 예제
public class ForExam1 {
	public static void main(String[] args){
		for(int i = 0; i < 10; i++){
			System.out.println("*");
		}
	}
} // 1~10까지 출력

- 구구단 만들기 예제
public class Gugudan {
	public static void main(String[] args){
		for(int k = 1; k <= 9; k++){
			for(int i = 1; i <= 9; i++){
				System.out.println(k + " * " + i + "= " + (k * i));
			}
			System.out.println();
		}
	}
}

- 중첩 반복문 빠져나가는 방법 : flag를 설정해준다.
public class LabelExam1 {
	public static void main(String[] args){
		outter:
		for(int i = 0; i < 3; i++){
			for(int k = 0; k < 3; k++){
				if(i == 0 && k == 2)
					break outter; // outter안에있는 반복문을 다 빠져나가게 된다. 원래라면 k 반보군만
				System.out.println(i + ", " +k);
			}
		}
	}
}

*/
