class Addition{
void Add(int a,int b){
System.out.println(a+b);
}
void sub(int a,int b){
 System.out.println(a-b);
}
}

public class Calci extends Addition{
   void Call(){
     System.out.println("This is a calculator class that extends Addition class");

   }
    public static void main(String[] args) {
        Calci c=new Calci();
        c.Call();
        c.Add(2,7);
        c.sub(8,6);

        
    }
}
