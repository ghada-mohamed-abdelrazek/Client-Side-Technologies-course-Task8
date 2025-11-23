        window.onload = function() {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.jsonbin.io/v3/b/68fcf992d0ea881f40bb2b6c", true);
            xhr.send();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    var users = data.record;
                    var table = document.getElementById("userTable");
                    users.forEach(function(elm) {
                        var row = "<tr>" +
                        "<td><img src='" + elm.image + "' alt='user'></td>" +
                        "<td>" + elm.firstName + "</td>" +
                        "<td>" + elm.lastName + "</td>" +
                        "<td>" + elm.phone + "</td>" +
                        "<td>" + elm.address + "</td>" +
                        "<td>" + elm.track + "</td>" +
                        "<td>" + elm.courses + "</td>" +
                        "<td>" + elm.position + "</td>" +
                        "</tr>"
                        table.innerHTML += row
                    })
                    }
            }
        }