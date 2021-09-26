$(document).ready(function(){
    $("#singupForm").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            sname:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true

            },
            password:{
                required:true,
                minlength:7
            },
            day:{
                required:true

            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            genter:{
                required:true
            }

        },
        messages:{
           
            fname:{
                required:"fil colam",
                minlength:"enter morethan 4 numbers",
                maxlength:"10 numbers"
            },
            sname:{
                required:"fil colam",
                minlength:"enter morethan 4 numbers"
            },
            email:{
                required:"fil colam",
                email:"enter emil adders"

            },
            password:{
                required:"fil colam",
                minlength:"enter minimum 7 numbers"
            },
            day:{
                required:"fil colam"

            },
            month:{
                required:"fill colam"
            },
            year:{
                required:"fil colam"
            },
            genter:{
                required:"fil colam"
            }

        }
    })
})