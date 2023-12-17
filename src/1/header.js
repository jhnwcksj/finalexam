// import './../css/global.css';
// import './../css/css3.css';
// import './../css/grey.css';
// import './../css/responsive.css';

// function Header(){
//     return(
        
//         <header>
            
//             <link href='https://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css' />
//             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css" integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossorigin="anonymous"></link>
            
//             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />

//             <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/global.css?t=1628341445" />
//             <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/css3.css?t=1625923460" />
//             <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/responsive.css?t=1625923460" />
//             <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/grey.css?t=1628447859" />
//             <div class="navbar navbar-default">
//                 <div class="container">
//                     <div class="navbar-header">
//                         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse" aria-label="Toggle navigation">
//                         <span class="icon-bar"></span>
//                         <span class="icon-bar"></span>
//                         <span class="icon-bar"></span> 
//                         </button>
			  
// 			            <div class="navbar-header scaleimages">
				  
// 				            <a class="" href="https://sampforum.blast.hk/"><img src="https://sampforum.blast.hk/images/bootbb/logo_forum.gif" /></a>
			  
// 			            </div>
//                     </div>
//                     <div class="collapse navbar-collapse navbar-ex1-collapse">
// 			  <ul class="nav navbar-nav navbar-right">
				  
//                <li id="nav-forums"><a href="http://localhost:3000/"><i class="fa fa-group"></i> Forum</a></li>
//                <li id="nav-search"><a href="https://sampforum.blast.hk/search.php"><i class="fa fa-search"></i> Search</a></li>
//                <li id="nav-member"><a href="https://sampforum.blast.hk/memberlist.php"><i class="fa fa-users"></i> Members</a></li>
//                <li id="nav-help"><a href="https://sampforum.blast.hk/misc.php?action=help"><i class="fa fa-life-bouy"></i> Help</a></li>
//                 </ul>
//                     </div>
//                 </div>
//             </div>
//             {/* <span class="float_right hidden-xs">Hello There, Guest!</span> */}
//         </header>
        
//     );
// }

class Header{
    render(){
        return(
        
                    <header>
                        
                        <link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet" type="text/css" />
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css" integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossorigin="anonymous"></link>
                        
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
            
                        <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/global.css?t=1628341445" />
                        <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/css3.css?t=1625923460" />
                        <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/responsive.css?t=1625923460" />
                        <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/grey.css?t=1628447859" />
                        <div class="navbar navbar-default">
                            <div class="container">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse" aria-label="Toggle navigation">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span> 
                                    </button>
                          
            			            <div class="navbar-header scaleimages">
                              
            				            <a class="" href="https://sampforum.blast.hk/"><img src="https://sampforum.blast.hk/images/bootbb/logo_forum.gif" /></a>
                          
            			            </div>
                                </div>
                                <div class="collapse navbar-collapse navbar-ex1-collapse">
            			  <ul class="nav navbar-nav navbar-right">
                              
                           <li id="nav-forums"><a href="http://localhost:3000/"><i class="fa fa-group"></i> Forum</a></li>
                           <li id="nav-search"><a href="https://sampforum.blast.hk/search.php"><i class="fa fa-search"></i> Search</a></li>
                           <li id="nav-member"><a href="https://sampforum.blast.hk/memberlist.php"><i class="fa fa-users"></i> Members</a></li>
                           <li id="nav-help"><a href="https://sampforum.blast.hk/misc.php?action=help"><i class="fa fa-life-bouy"></i> Help</a></li>
                            </ul>
                                </div>
                            </div>
                        </div>
                        {/* <span class="float_right hidden-xs">Hello There, Guest!</span> */}
                    </header>
                    
                );
    }
}

export default Header;