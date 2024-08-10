function refresh(){
    $.ajax({
        method : "get",
        url : "/data",
        success : function(data){
            $('#grid').empty();
            data.forEach(function(val, index) {
                $('#grid').append(
                    `
                    <tr>
                        <td>${index+1}</td>
                        <td>${val.title}</td>
                        <td>${val.firstname}</td>
                        <td>${val.lastname}</td>
                        <td>${val.city}</td>
                        <td>
                            <button data-hid="${val._id}" type="button" class="btn btn-warning edit">Edit/Update</button>
                        </td>
                        <td>
                            <button data-hid="${val._id}" type="button" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    `
                )
            });
        },
        error : function(error){
            console.log("error", error);
        }
    })
}

$(function(){
    refresh();
    $('#addbtn').on('click', function(){
        addHeroHandler(); 
    });
    $('#grid').on("click", ".btn.btn-danger", deleteHeroHandler);
    $('#grid').on("click", ".btn.btn-warning", editHeroHandler);
    $('#updatebtn').on('click', function(){
        updateHeroHandler(); 
    });
    $('.edithero').hide();
    $('.addhero').show();
});

function addHeroHandler(){
    let hero = {
        "title" : $('#herotitle').val(),
        "firstname" : $('#firstname').val(),
        "lastname" : $('#lastname').val(),
        "city" : $('#city').val()
    };
    $.ajax({
        method : "post",
        url : "/data",
        contentType : "application/json",
        dataType : "json",
        data : JSON.stringify(hero),
        success : function(result){
            refresh();
            $('#herotitle').val("");
            $('#firstname').val("");
            $('#lastname').val("");
            $('#city').val("");
        },
        error : function(error){
            console.log("error", error);
        }
    })
}

function deleteHeroHandler(event){
    let hid = event.target.getAttribute('data-hid');
    $.ajax({
        method : "delete",
        url : "/delete/"+hid,
        success : function(result){
            refresh();
        },
        error : function(error){
            console.log("error", error);
        }
    })
}

function editHeroHandler(event){
    let hid = event.target.getAttribute('data-hid');
    $.ajax({
        method : "get",
        url : "/edit/"+hid,
        success : function(result){
            $('#editheroid').val(result._id);
            $('#editherotitle').val(result.title);
            $('#editfirstname').val(result.firstname);
            $('#editlastname').val(result.lastname);
            $('#editcity').val(result.city);
            $('.edithero').show(500);
            $('.addhero').hide(500);
        },
        error : function(error){
            console.log("error", error);
        }
    })
}

function updateHeroHandler(){
    let hero = {
        "title" : $('#editherotitle').val(),
        "firstname" : $('#editfirstname').val(),
        "lastname" : $('#editlastname').val(),
        "city" : $('#editcity').val()
    };
    $.ajax({
        method : "put",
        url : "/edit/"+$('#editheroid').val(),
        contentType : "application/json",
        dataType : "json",
        data : JSON.stringify(hero),
        success : function(result){
            refresh();
            $('#editheroid').val("");
            $('#editherotitle').val("");
            $('#editfirstname').val("");
            $('#editlastname').val("");
            $('#editcity').val("");
            $('.edithero').hide(500);
            $('.addhero').show(500);
        },
        error : function(error){
            console.log("error", error);
        }
    })
}