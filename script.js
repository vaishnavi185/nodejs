class car{
            constructor(name){
                this.name = name;
            
            }
             present(){
                    return 'ihavea car brand of '+this.name
                }
        }
        class model extends car{
            constructor(name,mod){
                super(name);
                this.model = mod;
            }
            show(){
                return this.present()+ 'its is a ' + this.model
            }
        }
        const mycar= new model("forsd", " mustang");
        
        const hello =new car("BMW");
        const hello2 =new car("mercedes");
         mycar.show();
         document.write(mycar.show());
         document.write("<br/>");
            document.write(hello.name);
            document.write("<br/>");
            document.write(hello2.name);

           document.write("<br/>");
            document.write(hello2.present());