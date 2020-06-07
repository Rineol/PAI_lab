<?php
App::uses('AppModel', 'Model');
/**
 * Employee Model
 *
 */
class Employee extends AppModel {
var $validate = array(
    'nazwisko' => array('rule' => 'notBlank'),
    'etat' => array('rule' => 'notBlank'),
    'placa_pod' => array(
			'rule' => array('range', -1, 2001),
            'message' => 'Placa podstawowa musi zawierać się w przedziale <0,2000>')
        
    );
}
