if(window.SimpleSlide){
  
  new SimpleSlide({
    slide: "quote", //nome do atributo data-slide="principal"
    nav: false, //se deve ou não mostrar a navegação -> true é default
    auto: true, //se o slide deve passar automaticamente -> true é default
    time: 5000 //tempo de transição dos slides
  });

  new SimpleSlide({
    slide: "portfolio", //nome do atributo data-slide="principal"
    nav: true, //se deve ou não mostrar a navegação -> true é default
    auto: true, //se o slide deve passar automaticamente -> true é default
    time: 5000 //tempo de transição dos slides
  });
}

if(window.SimpleAnime){
  new SimpleAnime();
}

if(window.SimpleForm){
  new SimpleForm({
    form: ".formphp", //Seletor do formulario
    button: "#enviar", //seletor do botao
    erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente enviar o email para contato@bikcraft.com</p></div>",
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve nós retornamos</p></div>"
  });
}