
public class ejercicio1 {

	public static void main(String[] args) {
		boolean a = 1 < 5;// Esta expresión es condicional
		int b = (8 + 3) * 11;// esta expresión no es condicional y no se puede almacenar en un tipo boolean,
								// pero si en un int o double.
		boolean c = true || false;// esta expresión si es condicional, dado que c puede ser true o false.
		boolean d = (true || false) || (true && false);// Esta expresión es condicional por la utilización del OR. Nos
														// dice que una es cierta .
		// int e = true + false;// Aqui no se cumple ninguna Condición y boolean no
		// puede admitir este tipo de variables.

		System.out.println("El resultado es: " + a);
		System.out.println("El resultado es: " + b);
		System.out.println("El resultado es: " + c);
		System.out.println("El resultado es: " + d);
	}

}
