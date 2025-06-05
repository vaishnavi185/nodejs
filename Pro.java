class Pro{
    private int n=10;
     static int m =20;
    void GetN(){
        System.out.println("n="+n);
    }

    public static void main(String[] args) {
        Pro p = new Pro();
        p.GetN();
        System.out.print(+m);
        
    }
}