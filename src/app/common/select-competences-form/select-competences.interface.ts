import {
  ICompetence,
  ISubTopic,
  ISubject,
  ITopic,
} from 'src/app/competences_data/competences.data'

export class SelectCompetence implements ICompetence {
  get subCompetences() {
    throw Error('no sub competences on TreeCompetence')
    return []
  }

  constructor(
    public _id: string,
    public name: string,
    public isSelected: boolean = false
  ) {}

  static Build(data: ICompetence) {
    return new SelectCompetence(data._id, data.name)
  }
}

export class SelectSubTopic implements ISubTopic {
  constructor(
    public _id: string,
    public name: string,
    public competences: SelectCompetence[],
    public expanded = false
  ) {}

  static Build(data: ISubTopic) {
    return new SelectSubTopic(
      data._id,
      data.name,
      data.competences.map(SelectCompetence.Build)
    )
  }
}

export class SelectTopic implements ITopic {
  constructor(
    public _id: string,
    public name: string,
    public competences?: SelectCompetence[],
    public subTopics?: SelectSubTopic[],
    public expanded = false
  ) {}

  static Build(data: ITopic) {
    return new SelectTopic(
      data._id,
      data.name,
      data.competences?.map(SelectCompetence.Build),
      data.subTopics?.map(SelectSubTopic.Build)
    )
  }
}

export class SelectSubject implements ISubject {
  constructor(
    public _id: string,
    public name: string,
    public topics: SelectTopic[]
  ) {}

  static Build(data: ISubject) {
    return new SelectSubject(
      data._id,
      data.name,
      data.topics.map(SelectTopic.Build)
    )
  }

  private subTopicsCompetences(subs: SelectSubTopic[]) {
    return subs.reduce(
      (competences, sub) => competences.concat(sub.competences),
      [] as SelectCompetence[]
    )
  }

  competences(search?: string) {
    return this.topics
      .reduce((competences, topic) => {
        if (topic.competences) return competences.concat(topic.competences)
        if (topic.subTopics)
          return competences.concat(this.subTopicsCompetences(topic.subTopics))
        return competences
      }, [] as SelectCompetence[])
      .filter((competence) =>
        competence.name.toLowerCase().includes(search?.toLowerCase() || '')
      )
  }
}
