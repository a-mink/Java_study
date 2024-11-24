package java_basics;

public class ClassStructureTest {
	public static void main(String[] args) {
		ClassStructure struc = new ClassStructure(); // heap 메모리에 인스턴스가 올라간다.
		
		struc.printClassName();
		
		struc.printNumber(1231);
		
		int x = struc.getOne();
		System.out.println(x);
		
		int value = struc.plus(95, 1231);
		System.out.println(value);
	}
}