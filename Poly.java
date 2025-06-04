class PolyParents{
    //overloading
     void func(String s){
        System.out.print(s);
     }
     //overloading
     void func(int i){
        System.out.print(i);
     }
}

class Poly extends PolyParents{
    //overriding
    void func(float f){
        System.out.print(f);
    }
 public static void main(String[] args) {
    Poly p =new Poly();
    p.func("hello");
    p.func(10);
 p.func((float)2.0);    

    
 }
}