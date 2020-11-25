import java.util.Scanner;

public class Tipo_Switch {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		System.out.println("Introduce un número: ");
		double num1 = in.nextInt();
		System.out.println("Introduce un número: ");
		double num2 = in.nextInt();
		System.out.println("Marque lo que desea hacer: ");
		System.out.println("1= SUMAR 2= RESTAR 3= MULTIPLICAR 4= DIVIDIR");
		int num3 = in.nextInt();

		switch (num3) {

		case 1:
			System.out.println("El resultado es: " + (int) (num1 + num2));
			break;

		case 2:
			System.out.println("El resultado es: " + (int) (num1 - num2));
			break;
		case 3:
			System.out.println("El resultado es: " + (int) (num1 * num2));
			break;
		case 4:
			System.out.print("El resultado es: ");
			System.out.printf("%2.2f", +(num1 / num2));
			break;
		}

	}
}
