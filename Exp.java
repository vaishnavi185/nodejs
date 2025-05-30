class Exp{
    private String name;
    private int id;
    private String desc;

    public void setName(String name){
        this.name=name;
    }
    public void setid(int id){
        this.id=id;
    }

public void setDesc(String desc){
        this.desc=desc;
    }

    public String getName(){
        return name;
    }
    public int getid(){
        return id;
    }
    public String getDesc(){
        return desc;
    }

    // public Exp(String name, int id,String desc){
    //     this.name=name;
    //     this.id=id;
    //     this.desc=desc;
    // }

    public static void main(String[] args){
    Exp e=new Exp();
    e.setName("jiya");
    e.setid(9);
    e.setDesc("hello every one i am jiya");
    System.out.println(e.getName());
    System.out.println(e.getid());
    System.out.println(e.getDesc());

    }
}