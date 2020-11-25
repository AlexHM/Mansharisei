import java.util.Scanner;

public class Ejercicio3 {

	public static void main(String[] args) {
		int num1 = 1, num2 = 2, num3 = 3, num4 = 4, num5 = 5;
		Scanner in = new Scanner(System.in);
		System.out.println("Enter number between 1-5: ");
		int num_final = in.nextInt();

		if (num_final > 4) {
			System.out.println("You`re number is the biggest one");
		} else {
			System.out.println("You`re number isn`t the biggest one");
		}
		int num_final2 = (((num1 + num2 - num3) * num4) / num5);
		System.out.println("The result is: " + num_final2);
	}

}
