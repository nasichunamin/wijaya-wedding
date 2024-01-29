<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Account $model */

$this->title = $model->nama_lengkap;
$this->params['breadcrumbs'][] = ['label' => 'Accounts', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="account-view">


    

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'username',
            'password',
            'role',
            'nama_lengkap',
            'jenis_kelamin',
            'tgl_lahir',
            'no_telepon',
            'token',
            'createdAt',
            'updatedAt',
            'deleteAt',
        ],
    ]) ?>

</div>
