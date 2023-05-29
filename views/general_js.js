function search_engine()
      {
        var input=document.getElementById("searchh").value;
        input=input.toLowerCase(); 
        if(input==="fast"||input==="fast and furious"||input==="furious")
        {
          window.location.href="/f9view";
        }
        else if(input==="knight and day"||input==="knight"||input==="day")
        {
          window.location.href="/kadview";
        }
        else if(input==="hotel"||input==="hotel transilvania"||input==="transilvania")
        {
          window.location.href="/hotelview";
        }
        else if(input==="end"||input==="game"||input==="end game")
        {
          window.location.href="/endgameview";
        }
        else 
        window.alert("Movie not found")
        
      }