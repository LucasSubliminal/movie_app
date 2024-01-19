console.log("its working")

let $form = $("<form>");

    let $input1 = $("<input>", {
        type: 'text', id: 'title', placeholder: 'Title'
    });
    
    let $input2 = $("<input>", {
        type: 'number', id: 'rating', placeholder: 'Rating', min: '1', max: '5'
    });
    
    let $submitBtn = $("<button>", {
        type: 'submit', text: 'Add'
    });
    
    let $listContainer = $("<div>", { id: 'listContainer'});
    
    $('$listContainer').append($form, $listContainer);
    
    $("form").on('submit', function(e){
        e.preventDefault();
        let title = $input1.val().trim();
        let rating = $input2.val().trim();
    
        if(title !== '' && rating !== '') {
        
            var $listItem = $('<div>', { class: 'list-item' });
            $listItem.append($('<span>').text(`Title: ${title}, Rating: ${rating}`));
    
            var $removeButton = $('<button>', { text: 'Remove' }).on('click', function() {
                $listItem.remove();
            });
            $listItem.append($removeButton);
            
         
            $listContainer.append($listItem);
    
            $titleInput.val('');
            $ratingInput.val('');
        }
    });