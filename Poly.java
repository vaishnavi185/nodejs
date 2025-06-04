class PolyParents{
     void func(String s){
        System.out.print(s);
     }
     void func(int i){
        System.out.print(i);
     }
}

class Poly extends PolyParents{
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