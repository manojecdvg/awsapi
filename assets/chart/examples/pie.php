<!DOCTYPE html>

<html>
<head>

    <title>Pie and Donut Charts</title>

    <link class="include" rel="stylesheet" type="text/css" href="<?php echo base_url();?>application/view/chart/jquery.jqplot.min.css" />
   
    <link type="text/css" rel="stylesheet" href="<?php echo base_url();?>application/view/chart/examples/syntaxhighlighter/styles/shCoreDefault.min.css" />
    <link type="text/css" rel="stylesheet" href="<?php echo base_url();?>application/view/chart/examples/syntaxhighlighter/styles/shThemejqPlot.min.css" />
  
    <!--[if lt IE 9]><script language="javascript" type="text/javascript" src="../excanvas.js"></script><![endif]-->
    <script class="include" type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    
   
</head>
<body>
   
    <div class="colmask leftmenu">
      <div class="colleft">
        <div class="col1" id="example-content">

  
<!-- Example scripts go here -->
  <style type="text/css">

    .jqplot-data-label {
      /*color: #444;*/
/*      font-size: 1.1em;*/
    }
  </style>


<div id="chart1" style="height:300px; width:500px;"></div>




<pre class="code prettyprint brush: js"></pre>
  
<script class="code" type="text/javascript">
$(document).ready(function(){
  var data = [
    ['Accounts', 3],['Information Technology', 3], ['HR', 1], 
   
  ];
  var plot1 = jQuery.jqplot ('chart1', [data], 
    { 
      seriesDefaults: {
        // Make this a pie chart.
        renderer: jQuery.jqplot.PieRenderer, 
        rendererOptions: {
          // Put data labels on the pie slices.
          // By default, labels show the percentage of the slice.
          showDataLabels: true
        }
      }, 
      legend: { show:true, location: 'e' }
    }
  );
});
</script>

<script class="code" type="text/javascript">
$(document).ready(function(){
  var data = [
    ['Heavy Industry', 12],['Retail', 9], ['Light Industry', 14], 
    ['Out of home', 16],['Commuting', 7], ['Orientation', 9]
  ];
  var plot2 = jQuery.jqplot ('chart2', [data], 
    {
      seriesDefaults: {
        renderer: jQuery.jqplot.PieRenderer, 
        rendererOptions: {
          // Turn off filling of slices.
          fill: false,
          showDataLabels: true, 
          // Add a margin to seperate the slices.
          sliceMargin: 4, 
          // stroke the slices with a little thicker line.
          lineWidth: 5
        }
      }, 
      legend: { show:true, location: 'e' }
    }
  );
});
</script>


<script class="code" type="text/javascript">
$(document).ready(function(){
  var s1 = [['a',6], ['b',8], ['c',14], ['d',20]];
  var s2 = [['a', 8], ['b', 12], ['c', 6], ['d', 9]];
  
  var plot3 = $.jqplot('chart3', [s1, s2], {
    seriesDefaults: {
      // make this a donut chart.
      renderer:$.jqplot.DonutRenderer,
      rendererOptions:{
        // Donut's can be cut into slices like pies.
        sliceMargin: 3,
        // Pies and donuts can start at any arbitrary angle.
        startAngle: -90,
        showDataLabels: true,
        // By default, data labels show the percentage of the donut/pie.
        // You can show the data 'value' or data 'label' instead.
        dataLabels: 'value'
      }
    }
  });
});
</script>

<!-- End example scripts -->

<!-- Don't touch this! -->


    <script class="include" type="text/javascript" src="<?php echo base_url();?>application/view/chart/jquery.jqplot.min.js"></script>
    <script type="text/javascript" src="<?php echo base_url();?>application/view/chart/examples/syntaxhighlighter/scripts/shCore.min.js"></script>
    <script type="text/javascript" src="<?php echo base_url();?>application/view/chart/examples/syntaxhighlighter/scripts/shBrushJScript.min.js"></script>
    <script type="text/javascript" src="<?php echo base_url();?>application/view/chart/examples/syntaxhighlighter/scripts/shBrushXml.min.js"></script>
<!-- End Don't touch this! -->

<!-- Additional plugins go here -->

    <script class="include" language="javascript" type="text/javascript" src="<?php echo base_url();?>application/view/chart/plugins/jqplot.pieRenderer.min.js"></script>
    <script class="include" language="javascript" type="text/javascript" src="<?php echo base_url();?>application/view/chart/plugins/jqplot.donutRenderer.min.js"></script>

<!-- End additional plugins -->

        </div>

 

</body>


</html>
