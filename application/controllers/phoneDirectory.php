<?php
if (! defined ( 'BASEPATH' ))
	exit ( 'No direct script access allowed' );
class phoneDirectory extends CI_Controller {

	
	function index(){
		$this->load->view ( 'userMenu' );
		$this->load->view('phoneDirectory');
			$this->load->view ( 'footer' );
	}
		function getPhones(){
			$this->load->library ( 'Datatables' );
		$columns = array ("'checkbox'",  "'slno'", 'emp_full_name', 'ext_no', 'email_id','location ');
		$columnsmap = array ('checkbox',  'slno', 'textbox', 'textbox', 'textbox', 'textbox', );
		$joins = '';
		$where = "and 1=1";
		$search = '';
		$groupby = '';
		echo $this->datatables->generate ( 'tbl_extensions', $columns, 'tbl_extensions.id', $joins, $where, $search, $groupby, $columnsmap );
		
	}
}