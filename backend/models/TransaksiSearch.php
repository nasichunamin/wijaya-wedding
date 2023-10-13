<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Transaksi;

/**
 * TransaksiSearch represents the model behind the search form of `app\models\Transaksi`.
 */
class TransaksiSearch extends Transaksi
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'account_id', 'paket_id'], 'integer'],
            [['tgl_pemesanan', 'status', 'tgl_pembayaran', 'alamat_pemesanan', 'createdAt', 'updateAt'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Transaksi::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'account_id' => $this->account_id,
            'paket_id' => $this->paket_id,
            'tgl_pemesanan' => $this->tgl_pemesanan,
            'tgl_pembayaran' => $this->tgl_pembayaran,
            'createdAt' => $this->createdAt,
            'updateAt' => $this->updateAt,
        ]);

        $query->andFilterWhere(['like', 'status', $this->status])
            ->andFilterWhere(['like', 'alamat_pemesanan', $this->alamat_pemesanan]);

        return $dataProvider;
    }
}
