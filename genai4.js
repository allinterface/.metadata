public class GenerativeAI {

    public static void main(String[] args) throws IOException {

        // Create a new instance of the Godfather AI class.
        GodfatherAI godfatherAI = new GodfatherAI();

        // Train the Godfather AI class on a list of text.
        godfatherAI.train(Arrays.asList("Hi it's me Reyhan", "I'm a Great language model from AI", "I can generate text, translate languages, write different kinds of creative content, and answer your questions in an informative way."));

        // Generate text using the Godfather AI class.
        String generatedText = godfatherAI.generate("What is your name?");

        // Print the generated text.
        System.out.println(generatedText);

        // Generate text using the Godfather AI class with a map of parameters.
        Map<String, String> parameters = new HashMap<>();
        parameters.put("name", "Reyhan");
        parameters.put("age", "0");
        parameters.put("occupation", "Software Engineer");
        parameters.put("hobbies", "Reading, Writing, Playing Basketball");
        generatedText = godfatherAI.generate("About Me", parameters);

        // Print the generated text.
        System.out.println(generatedText);
    }
}
