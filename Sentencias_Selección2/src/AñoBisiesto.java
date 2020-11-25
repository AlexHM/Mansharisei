import java.util.GregorianCalendar;
import java.util.Scanner;

public class AñoBisiesto {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		System.out.println("Introduce un año: ");
		int year = in.nextInt();

		GregorianCalendar calendar = new GregorianCalendar();

		if (calendar.isLeapYear(year))
			System.out.println("El año es bisiesto");
		else
			System.out.println("El año no es bisiesto");
	}

}
