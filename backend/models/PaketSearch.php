<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Paket;

/**
 * PaketSearch represents the model behind the search form of `app\models\Paket`.
 */
class PaketSearch extends Paket
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'hotel_id', 'harga'], 'integer'],
            [['kategori', 'nama', 'dekorasi', 'makeup_dan_busana', 'upacara_dan_tenda', 'dokumentasi', 'entertainment'], 'safe'],
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
        $query = Paket::find();

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
            'hotel_id' => $this->hotel_id,
            'harga' => $this->harga,
        ]);

        $query->andFilterWhere(['like', 'kategori', $this->kategori])
            ->andFilterWhere(['like', 'nama', $this->nama])
            ->andFilterWhere(['like', 'dekorasi', $this->dekorasi])
            ->andFilterWhere(['like', 'makeup_dan_busana', $this->makeup_dan_busana])
            ->andFilterWhere(['like', 'upacara_dan_tenda', $this->upacara_dan_tenda])
            ->andFilterWhere(['like', 'dokumentasi', $this->dokumentasi])
            ->andFilterWhere(['like', 'entertainment', $this->entertainment]);

        return $dataProvider;
    }
}
