// public class S {
//     public static void main(String[] args) {
      
//         String str=new String ("hllo");
//   String s="hello";
//         System.out.println(s==str); // false, because s is a string literal and str is an object
//     }
// }


// class S{
//     public static void main(String[] args) {
//         StringBuffer sb= new StringBuffer();
//         sb.append("hello");
//         sb.append("world");
//         sb.insert(5, " ");

//         sb.reverse() ;
    

//         String str = sb.toString();
//         System.out.println(str);
//         System.out.println(sb.capacity());
//         System.out.print(sb.charAt(8));

//     }
// }

class S{
     public static void main(String[] args) {
        String str = "java is*fun";
       String[] words = str.split("\\*");

        StringBuilder capitalized = new StringBuilder();

        for(String word : words) {
            capitalized.append(Character.toUpperCase(word.charAt(0)))
                       .append(word.substring(1)).append(" ");
        }

        System.out.println(capitalized.toString().trim());
    }
}