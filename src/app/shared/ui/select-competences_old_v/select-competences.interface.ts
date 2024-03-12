import {
  ICompetence,
  ISubCompetence,
  ISubTopic,
  ISubject,
  ITopic,
} from 'src/app/shared/data/competences_data/competences.data'

export class SelectCompetence implements ICompetence {
  constructor(
    public _id: string,
    public name: string,
    public subCompetences: ISubCompetence[],
    public short?: string,
    public expanded = false
  ) {}

  static Build(data: ICompetence) {
    return new SelectCompetence(
      data._id,
      data.name,
      data.subCompetences,
      data.short
    )
  }
}

export class SelectSubTopic implements ISubTopic {
  constructor(
    public _id: string,
    public name: string,
    public competences: SelectCompetence[],
    public short?: string,
    public expanded = false
  ) {}

  static Build(data: ISubTopic) {
    return new SelectSubTopic(
      data._id,
      data.name,
      data.competences.map(SelectCompetence.Build),
      data.short
    )
  }
}

export class SelectTopic implements ITopic {
  constructor(
    public _id: string,
    public name: string,
    public competences?: SelectCompetence[],
    public subTopics?: SelectSubTopic[],
    public short?: string,
    public expanded = false
  ) {}

  static Build(data: ITopic) {
    return new SelectTopic(
      data._id,
      data.name,
      data.competences?.map(SelectCompetence.Build),
      data.subTopics?.map(SelectSubTopic.Build),
      data.short
    )
  }
}

export class SelectSubject implements ISubject {
  constructor(
    public _id: string,
    public name: string,
    public topics: SelectTopic[],
    public short: string
  ) {}

  static Build(data: ISubject) {
    return new SelectSubject(
      data._id,
      data.name,
      data.topics.map(SelectTopic.Build),
      data.short
    )
  }

  private subCompetencesFromCompetences(
    competences: SelectCompetence[]
  ): ISubCompetence[] {
    return competences.reduce(
      (subs, comp) => subs.concat(comp.subCompetences),
      [] as ISubCompetence[]
    )
  }

  private subCompetencesFromSubTopics(
    subs: SelectSubTopic[]
  ): ISubCompetence[] {
    return subs.reduce(
      (subs, subT) =>
        subs.concat(this.subCompetencesFromCompetences(subT.competences)),
      [] as ISubCompetence[]
    )
  }

  private get allSubCompetences(): ISubCompetence[] {
    return this.topics.reduce((subs, topic) => {
      if (topic.competences)
        return subs.concat(
          this.subCompetencesFromCompetences(topic.competences)
        )
      if (topic.subTopics)
        return subs.concat(this.subCompetencesFromSubTopics(topic.subTopics))
      return subs
    }, [] as ISubCompetence[])
  }

  filterSubCompetences(search?: string): ISubCompetence[] {
    if (!search) return this.allSubCompetences
    return this.allSubCompetences.filter((sub) => {
      return sub.name.toLowerCase().includes(search.toLowerCase())
    })
  }

  private competencesFromSubTopic(
    subTopics: SelectSubTopic[]
  ): SelectCompetence[] {
    return subTopics.reduce((comps, subT) => {
      return comps.concat(subT.competences)
    }, [] as SelectCompetence[])
  }

  private get allCompetences(): SelectCompetence[] {
    return this.topics.reduce((comps, topic) => {
      if (topic.competences) return comps.concat(topic.competences)
      if (topic.subTopics)
        return comps.concat(this.competencesFromSubTopic(topic.subTopics))
      return comps
    }, [] as SelectCompetence[])
  }

  filterCompetences(search?: string): SelectCompetence[] {
    if (!search) return this.allCompetences
    return this.allCompetences.filter((comp) => {
      if (comp.name.toLowerCase().includes(search.toLowerCase())) return true
      for (let sub of comp.subCompetences) {
        if (sub.name.toLowerCase().includes(search.toLowerCase())) return true
      }
      return false
    })
  }
}
