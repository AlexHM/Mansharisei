import java.util.Scanner;

public class ParImpar {

	public static void main(String[] args) {

		// Declaración

		Scanner in = new Scanner(System.in);
		System.out.print("Introduce un número: ");
		int num = in.nextInt();
		System.out.print("Introduce otro número:");
		int num2 = in.nextInt();

		

		if ((num % 2) == 0 ) {
            System.out.println( num + ": Par");
        } else {
            System.out.println( num+ ": Impar");
        }
		
		if ((num2 % 2) == 0 ) {
            System.out.println( num2 + ": Par");
        } else {
            System.out.println( num2 + ": Impar");
        }

		if (num > num2) {
			System.out.println("Este número es el mayor: " + num);
		} else {
			System.out.println("Este número es el mayor: " + num2);
			if (num == num2) {
				System.out.println("Son iguales");
			}
		}

	}
}