class Pro{
    private int n=10;
     static int m =20;
    void GetN(){
        System.out.println("n="+n);
    }
void Pro(){
    System.out.println("i am no args constructor");
}

void Pro(int a){
    System.out.println("Prameter"+a);
}
    public static void main(String[] args) {
        Pro p = new Pro();
        p.GetN();
        System.out.print(+m);
        p.Pro();
        p.Pro(900);

        int a= 100;
        System.out.println(+a);
        
    }
}