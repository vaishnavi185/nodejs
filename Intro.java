abstract class Abs{
    abstract void fruite();
    abstract void vegetables();

    void message(){
        System.out.print("i am healthy");
    }
}

public class Intro extends Abs{
    void fruite(){
        System.out.println("i am fruit");
    }
    void vegetables(){
        System.out.println("I am vegetable");
    }

    public static void main(String[] args) {
        Intro obj=new Intro();
        obj.fruite();
        obj.vegetables();
        obj.message();
    }
}