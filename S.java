// public class S {
//     public static void main(String[] args) {
      
//         String str=new String ("hllo");
//   String s="hello";
//         System.out.println(s==str); // false, because s is a string literal and str is an object
//     }
// }


class S{
    public static void main(String[] args) {
        StringBuffer sb= new StringBuffer();
        sb.append("hello");
        sb.append("world");
        sb.insert(5, " ");

        sb.reverse() ;

        String str = sb.toString();
        System.out.println(str);

        
    }
}