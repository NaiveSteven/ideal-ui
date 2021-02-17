<demo>
常规使用
</demo>
<template>
  <div>
    <Table
      :data-source="dataSource"
      :cla="columns"
      style="margin-bottom: 48px"
    />
    <Table
      :striped="false"
      :data-source="dataSource"
      :cla="columns"
      style="margin-bottom: 48px"
    />
    <Table
      @change-items="changeItems"
      :selectedItems="selectedItems"
      :checkable="true"
      :data-source="dataSource"
      :cla="columns"
      style="margin-bottom: 48px"
    />
    <Table
      :numberVisible="true"
      :data-source="dataSource"
      :cla="columns"
      style="margin-bottom: 48px"
    />
    <Table
      :bordered="true"
      :data-source="dataSource"
      :cla="columns"
      style="margin-bottom: 48px"
    />
  </div>
</template>

<script lang="ts">
import { Table } from "../../lib/index";
export default {
  components: {
    Table,
  },
  data() {
    return {
      selectedItems: [],
    };
  },
  methods: {
    changeItems(items) {
      this.selectedItems = items;
    },
  },
  setup() {
    const columns = [
      {
        text: "姓名",
        field: "name",
      },
      {
        text: "分数",
        field: "score",
      },
    ];
    const dataSource = [
      {
        id: "1",
        name: "aaaa",
        score: 100,
      },
      {
        id: "2",
        name: "aaaa",
        score: 100,
      },
      {
        id: "3",
        name: "aaaa",
        score: 100,
      },
      {
        id: "4",
        name: "aaaa",
        score: 100,
      },
    ];
    return {
      columns,
      dataSource,
    };
  },
};
</script>
