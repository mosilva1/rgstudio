//Portugues
$(function() {
    $(".br").click(function(){
        //cabeçalho
        $(".nav-item").children().eq(0).text("HOME");
        $(".nav-item").children().eq(1).text("PORTFÓLIO");
        $(".nav-item").children().eq(2).text("DESIGN");
        $(".nav-item").children().eq(3).text("MOSTRAS");
        $(".nav-item").children().eq(4).text("CONTATO");
        $(".language-selected").text("PORTUGUÊS");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-br");
        //Masthead
        $(".title").text("ARQUITETURA");
        $(".nome").text("Ricardo Gaspar");
        $(".historia").text("Ricardo Gaspar fundou o RG Studio + estabelecendo uma trajetória para que seu nome passasse a ser uma referência no cenário do universo da decoração, através de longos anos de dedicação a projetos voltados a diversos setores, como residencial, comercial e paisagismo, em todo o estado de São Paulo. A busca pela personalização dos trabalhos reflete-se no resultado final de cada projeto de arquitetura, independente do perfil dos clientes, assim como estilos e expectativas, uma vez que o intuito é sempre criar ambientes que possam aliar conforto, harmonia, praticidade, estética e qualidade.");
        //contato
        $(".local").text("LOCALIZAÇÃO");
        $(".numero").text("CONTATO");
    });
});
//Ingles
$(function() {
    $(".en").click(function(){
        //cabeçalho
        $(".nav-item").children().eq(0).text("HOME");
        $(".nav-item").children().eq(1).text("PORTFÓLIO");
        $(".nav-item").children().eq(2).text("DESIGN");
        $(".nav-item").children().eq(3).text("SHOWS");
        $(".nav-item").children().eq(4).text("CONTACT");
        $(".language-selected").text("ENGLISH");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-en");
        //Masthead
        $(".title").text("ARCHITECTURE");
        $(".nome").text("Ricardo Gaspar");
        $(".historia").text("Ricardo Gaspar founded RG Studio + establishing a trajectory for his name to become a reference in the decoration universe scenario, through long years of dedication to projects aimed at various sectors, such as residential, commercial and landscaping, throughout the state. from Sao Paulo. The search for personalization of the works is reflected in the final result of each architectural project, regardless of the client's profile, as well as styles and expectations, since the aim is always to create environments that can combine comfort, harmony, practicality, aesthetics and quality.");
        //contato
        $(".local").text("LOCALIZATION");
        $(".numero").text("CONTACT");
    });
});
//Espanhol
$(function() {
    $(".es").click(function(){
        //cabeçalho
        $(".nav-item").children().eq(0).text("COMIENZO");
        $(".nav-item").children().eq(1).text("PORTAFOLIO");
        $(".nav-item").children().eq(2).text("DISEÑO");
        $(".nav-item").children().eq(3).text("ESPETÁCULOS");
        $(".nav-item").children().eq(4).text("CONTACTO");
        $(".language-selected").text("ESPAÑOL");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-es");
        //Masthead
        $(".title").text("ARQUITECTURA");
        $(".nome").text("Ricardo Gaspar");
        $(".historia").text("Ricardo Gaspar fundó RG Studio + estableciendo una trayectoria para que su nombre se convierta en una referencia en el escenario del universo de la decoración, a través de largos años de dedicación a proyectos destinados a diversos sectores, como residencial, comercial y paisajismo, en todo el estado de Sao Paulo. La búsqueda de la personalización de las obras se refleja en el resultado final de cada proyecto arquitectónico, independientemente del perfil del cliente, estilos y expectativas, ya que el objetivo es siempre crear ambientes que puedan combinar comodidad, armonía, practicidad, estética y calidad.");
        //contato
        $(".local").text("LOCALIZACIÓN");
        $(".numero").text("CONTACTO");
    });
});

$(function() {
    $(".contraste").click(function(){
    document.documentElement.classList.toggle("dark-mode")

    });
});