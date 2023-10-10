<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Hotel $model */

$this->title = 'Tambah Hotel';
$this->params['breadcrumbs'][] = ['label' => 'List Hotel', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="hotel-create">


    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
