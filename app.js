var books = [
{
  title: 'CSS: The Definitive Guide',
  author: 'Eric Meyer',
  link: 'http://shop.oreilly.com/product/0636920012726.do',
  type: 'css'
},
{
  title: 'CSS Development with CSS3',
  author: 'Zachary Kingston',
  link: 'http://shop.oreilly.com/product/0636920057970.do',
  type: 'css'
},
{
  title: 'You Don\'t Know JS: Up & Going',
  author: 'Kyle Simpson',
  link: 'http://shop.oreilly.com/product/0636920039303.do',
  type: 'js'
},
{
  title: 'Programming JavaScript Applications',
  author: 'Eric Elliott',
  link: 'http://shop.oreilly.com/product/0636920033141.do',
  type: 'js'
},
{
  title: 'Modern JavaScript',
  author: 'unknown',
  link: 'http://www.oreilly.com/web-platform/free/modern-javascript.csp',
  type: 'js'
}
] ;

// Affiche en liste dans le html
for (var x=0 ; x< books.length ; x++) 
{
  $('#books').append('<ul><li>' + books[x].title + '</li><li>' + books[x].author + '</li><li>' + books[x].link + '</li><li>' + books[x].type + '</li></ul>');
}


// Affiche uniquement les livres css
$('#css').click(function()
{
  $('ul').html('');
  $('li').attr('class' , 'list-group');

    for (var i=0 ; i<books.length ; i++)
    {
      if (books[i].type == 'css')
      {
          $('#books').append('<ul><li>' + books[i].title + '</li><li>' + books[i].author + '</li><li>' + books[i].link + '</li><li>' + books[i].type + '</li></ul>');
          $('li').attr('class' , "list-group-item list-group-item-info");
      }
    }
});


//Affiche uniquement les livres js
$('#js').click(function()
{
  $('ul').html('');
  $('li').attr('class' , 'list-group');
  
    for (var j=0 ; j<books.length ; j++)
    {
      if (books[j].type == 'js')
      {
          $('#books').append('<ul><li>' + books[j].title + '</li><li>' + books[j].author + '</li><li>' + books[j].link + '</li><li>' + books[j].type + '</li></ul>');
          $('li').attr('class' , "list-group-item list-group-item-info");
      }
    }
});

$('li').attr('class' , "list-group-item list-group-item-info");