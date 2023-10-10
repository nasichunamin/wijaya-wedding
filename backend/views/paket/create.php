<?php



/** @var yii\web\View $this */
/** @var app\models\Paket $model */

$this->title = 'Tambah Paket';
$this->params['breadcrumbs'][] = ['label' => 'List Paket', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;


?>
<div class="paket-create">

<?= $this->render('_form', [
        'model' => $model,
    ]) ?>


</div>
