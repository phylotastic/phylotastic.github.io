# Background

The Phylotastic system is intended for cases in which users (scientists, educators, the general public) would benefit from having a species phylogeny, without the requirement to go through the process of de novo phylogeny inference (which takes time, resources, and special training). In response to a user's query, the system will apply automated methods to provide a response, drawing on expert phylogenies (from sources such as OpenTree, TreeBASE, APG and ToLWeb), and addressing the problem of name mismatches and missing branch lengths.

In the simplest case, the query will be a list of species, and the response will be a phylogeny that covers as many of those species as possible. However, the availability of taxonomic name resolution services, and the potential for cross-referencing with existing biological databases, mean that other queries are possible, e.g., "a phylogeny of fungal species with genomes in GenBank", or "a scaled phylogeny of mammal species identified in GBIF as having a location in Sweden".

The functionality of the Phylotastic system will be designed in a way that makes it widely accessible and customizable. Developers will be able to integrate it into existing tools. It will be accessible from any networked device, from smart phones to supercomputers.

# Use Cases

## Canonical workflow

*   **1\. Gather species names**. The user assembles a list of binomial species names.
*   **2\. Clean species names**. The list of species is checked against an authority to map mis-spelled or non-canonical names to authorized names.
*   **3\. Identify phylogeny source**. The source phylogeny that best covers the set of species is identified.
*   **4\. Obtain subtree**. The subtree corresponding to the list of species is acquired from the tree source, in the form of a topology without branch lengths.
*   **5\. Scale subtree**. Lengths are assigned to branches by aligning the tree to a database of scaled trees.

## Use cases in the grant proposal

### Generate trees from scientific publications

Publications that use a species tree are useful for testing because they exemplify what researchers want, and what qualifies as adequate for publication. For this project we will obtain a set of recently published studies that represent diverse sub-disciplines and use-cases, and use them to generate ad hoc tests. At least 40 studies will be a random sample of recent literature. The challenges are to reproduce the trees and, as appropriate, constraints on tree discovery and downstream analysis.

*   **1\. Gather species names**. The names can be scraped from a paper. In some cases, they may have to be hand-entered or scraped from a specific section of the paper such as a data table.
*   **2\. Clean species names**. No special conditions or exceptions.
*   **3\. Identify phylogeny source**. No special conditions or exceptions. In some cases, the authors may have used a particular source tree.
*   **4\. Obtain subtree**. No special conditions or exceptions.
*   **5\. Scale subtree**. No special conditions or exceptions.

The motivation for this use-case is two-fold. By trying to replicate published actual scientific analyses, we will discover **the constraints that typically apply for research users**, e.g.,

*   How large are typical species trees that are useful to researchers?
*   How often is it acceptable to do a species substitution? (e.g., a species substitution is apparent in Riek's analysis if one digs deeply)
*   How often are scaled trees required?

The characteristics of the trees will be determined by whatever downstream analysis steps are required by the publication. For instance, this will determine if the tree needs branch lengths.

Second, by trying to replicate an actual scientific analysis, we provide a basis to evaluate **the effectiveness of the phylotastic system**, e.g.,

*   How well can the system cover the requested set of species?
*   How well can the system meet other constraints?
*   What kinds of ambiguities or errors are exposed?

For instance, it may be that the scientists have built a custom tree that has better coverage than a phylotastic tree. In some cases, we may be able to show that a re-analysis based on phylotastic-supplied trees is just as good as the original analysis.

#### References

*   Riek A. 2011\. Allometry of milk intake at peak lactation. Mammalian Biology Zeitschrift fur Saugetierkunde 76: 3-11\. doi: 10.1016/j.mambio.2010.03.004

### Flexible analysis of high-value comparative data sets

A typical research use of extracted trees, exemplified in Walls (2011) or Riek (2011), is to conduct an evolutionary analysis of a matrix of compared traits for a small set of species. For this use-case, Dr. Walls of iPlant (letter) will join the design team. Our approach is inspired by a hackathon demonstration project (integration of subtree extraction web-services into Mesquite (Madison, et al, 2007), an extensible workbench for evolutionary analysis) and by the recent emergence of high-value data sets covering many species for many traits, e.g., the leaf economics spectrum data from the Global Plant Trait Network (Wright, et al 2004), or two recent large-scale "phenomics" matrices of Burleigh, et al (2013) and O'Leary, et al (2013). We will embed one or more such high-value data sets in an available analysis environment (e.g., Mesquite, R, iPlant Discovery Environment) modified to allow automated discovery of species trees. Using published studies as a guide, we will create recipes for various types of analyses, and offer screencasts that demonstrate the use of tools.

The motivations of this use-case are similar to the first one, except that here, we expect to create functionality that is genuinely useful to research scientists, and that could be the basis for multiple publications using the high-value data sets.

*   **1\. Gather species names**. The names will be gather out of the data source, which is probably a spreadsheet in most cases.
*   **2\. Clean species names**. No special conditions or exceptions.  Even though LES is a kind of authoritative source, name-cleaning is still required according to RW.
*   **3\. Identify phylogeny source**. Any source will do, but we may wish to use the APG tree that is standard in the plant systematics community.
*   **4\. Obtain subtree**. No special conditions or exceptions.
*   **5\. Scale subtree**. No special conditions or exceptions.

#### References

*   Burleigh, J.G., K. Alphonse, A.J. Alverson, H.M. Bik, C. Blank, A.L. Cirranello, H. Cui, M. Daly, T.G. Dietterich, G. Gasparich, J. Irvine, M. Julius, S. Kaufman, E. Law, J. Liu, L. Moore, M.A. O'Leary, M. Passarotti, S. Ranade, N.B. Simmons, D.W. Stevenson, R.W. Thacker, E.C. Theriot, S. Todorovic, P.M. Velazco, R.L. Walls, J.M. Wolfe, and M. Yu, Next-generation phenomics for the Tree of Life. PLoS currents, 2013\. 5.
*   O'Leary, M.A., J.I. Bloch, J.J. Flynn, T.J. Gaudin, A. Giallombardo, N.P. Giannini, S.L. Goldberg, B.P. Kraatz, Z.X. Luo, J. Meng, X. Ni, M.J. Novacek, F.A. Perini, Z.S. Randall, G.W. Rougier, E.J. Sargis, M.T. Silcox, N.B. Simmons, M. Spaulding, P.M. Velazco, M. Weksler, J.R. Wible, and A.L. Cirranello, The placental mammal ancestor and the post- K-Pg radiation of placentals. Science, 2013\. 339(6120): p. 662-7.. doi: 10.1126/science.1229237
*   Riek A. 2011\. Allometry of milk intake at peak lactation. Mammalian Biology Zeitschrift fur Saugetierkunde 76: 3-11\. doi: 10.1016/j.mambio.2010.03.004
*   Walls RL. 2011\. Angiosperm leaf vein patterns are linked to leaf functions in a global-scale data set. American journal of botany 98: 244-253\. doi: 10.3732/ajb.1000154
*   Wright IJ, Reich PB, Westoby M, et al. 2004\. The worldwide leaf economics spectrum. Nature 428: 821-827\. doi: 10.1038/nature02403

### Autogenerate trees for web pages

Phylogenies would be a useful addition to many thousands of taxon pages in online catalogs, and sometimes are added using ad hoc methods. Dr. Katja Schulz of EOL (Parr, et al., 2014) will join the design team as we work on 2 approaches to auto-generating trees for embedding in web pages. The first approach is to auto-extract names from existing page content (e.g., the Wikipedia "ant" page has 277 discoverable names, and we can recover a useful phylogeny with 88 matching species). The second approach is to generate a phylogeny for a higher taxon (e.g., "Carnivora"), including the case in which the taxon is too large to present, and a useful phylogeny requires a sampling approach, e.g., terminate the tree with families or genera, or choose 40 species based on a relevance metric such as the count of records in PubMed, EOL or GBIF (the Global Biodiversity Information Facility). We will build a client (executed when page content is updated) that discovers a phylogeny and returns a clickable HTML5 view with embedded links to species pages.

The motivation of this use-case is to pursue a high-volume application of tree-discovery where the demand for quality is relatively low, but the impact is potentially high. If this works, putting subtree images on taxon pages could become very quickly **the major means by which ToL knowledge is conveyed to the public**, including educators, scientists and biology enthusiasts.

*   **1\. Gather species names**. The list of species is scraped from a web page or, alternatively, the list is generated by expanding a taxon name into its component species (this is non-trivial, with many options for doing this in different ways).
*   **2\. Clean species names**. No special conditions or exceptions.
*   **3\. Identify phylogeny source**. No special conditions or exceptions.
*   **4\. Obtain subtree**. No special conditions or exceptions.
*   **5\. Scale subtree**. No special conditions or exceptions.

The downstream step here is mainly to generate an image, and ideally a clickable image that links to species pages. For this, branch lengths are preferred but not critical.

#### References

*   Parr CS, Wilson N, Leary P, et al. 2014\. The Encyclopedia of Life v2: Providing Global Access to Knowledge About Life on Earth. Biodiversity data journal: e1079\. doi: 10.3897/BDJ.2.e1079

### Autogenerate trees for gene-species tree reconciliation

In 2012, hackathon participants (Stoltzfus, et al 2013) prototyped an application for gene-species tree reconciliation that allows the user to choose a starting gene tree, discover the corresponding list of species (using existing web services), obtain a species tree (using our web services), and carry out gene-species tree reconciliation (using a local reconciliation engine). Using an environment such as R, Python or BioPerl, we will implement a token annotation workflow that processes each gene in a genome by conducting a standard BLAST search to find homologs, obtains a species tree for reconciliation, and identifies orthologs.

The motivation of this use-case is to pursue a high-volume application of tree-discovery where the impact is potentially high. Reconciliation is used to assign orthology, therefore it is part of functional assignment in many genome annotation workflows. That is, attributions of "function" are made based on relationships of orthology, which are determined by reconciliation. The relevance of this is that **function assignment in genome annotation is a major high-volume use-case in bioinformatics**. Depending on the manner of implementation, this could result in huge numbers of queries daily for phylotastic services. Furthermore, this is a context in which there is a potential to carry out a rigorous comparative evaluation of the effectiveness of a phylotastic-based workflow versus some alternative such as getting species trees from the NCBI taxonomy, or using a stereotyped set of species for the whole genome, rather than a custom species tree for each gene family.

*   **1\. Gather species names**. In this case, the preferred method to obtain species names typically will be to use NCBI services to obtain NCBI taxon names based on accessions. Where accessions are not available, the sequence can be BLASTed to obtain a species source.
*   **2\. Clean species names**. Typically the names will come from a single authority, NCBI.
*   **3\. Identify phylogeny source**. No special conditions or exceptions.
*   **4\. Obtain subtree**. Some reconciliation programs may require a fully resolved phylogeny in order to do the reconciliation.
*   **5\. Scale subtree**. It is unclear at this point whether reconciliation programs require branch lengths in the species tree.

#### References

*   Stoltzfus A, Lapp H, Matasci N, et al. 2013\. Phylotastic! Making tree-of-life knowledge accessible, reusable and convenient. BMC bioinformatics 14: 158\. doi: 10.1186/1471-2105-14-158

### PhyloGeoTastic

One example that is part of our plan for engaging educators is based on a tool (PhyloGeoTastic) that uses subtree extraction to get a phylogeny based on species occurrence data. The user clicks on a map to select a custom geographic region, and the application responds by retrieving species occurrence records for that region (from iNaturalist or GBIF), then finding a tree for the implicated species.

*   **1\. Gather species names**. In this case, species names are collected from the occurrence records available for a specified geographic region.
*   **2\. Clean species names**. Because of the way that species names are acquired, they may have been validated already. What species names are used by GBIF?
*   **3\. Identify phylogeny source**. No special conditions or exceptions.
*   **4\. Obtain subtree**. No special conditions or exceptions.
*   **5\. Scale subtree**. No special conditions or exceptions.

#### References

## Other use-cases and demonstrations

Our grant proposal states that

> We will remain open to other use-cases and applications, including many possibilities suggested by hackathon discussions (e.g., a taxonomic name-completion widget, a mobile app for museums or zoos).

### Mesquite-o-tastic: bringing trees into a widely used phylogeny workbench

In 2012, hackathon participants modified Mesquite to extract a list of species names from a character matrix, use the list to query for a species phylogeny from a Phylotastic test system, and integrate the resulting tree. This allows the user to carry out downstream steps that require a phylogeny, such as ancestral character state reconstruction. A brief [screencast](https://www.youtube.com/watch?v=Lak-zjwFuhQ) shows the use of the demo tool.

*   **1\. Gather species names**. The list of species names for a data matrix is accessed through the Mesquite API. If the character matrix does not have species names, the approach will not work.
*   **2\. Clean species names**. This step is skipped. Some names may be missed due to mismatches.
*   **3\. Identify phylogeny source**. The developers hard-coded a choice of phylogenies into the query.
*   **4\. Obtain subtree**. The subtree is obtained by a query issued to the prototype phylotastic web service developed by Rutger Vos.
*   **5\. Scale subtree**. This step is skipped, as branch lengths are not needed.

#### References

*   Stoltzfus, A. 2012\. Mesquite-o-tastic! (screencast). https://www.youtube.com/watch?v=Lak-zjwFuhQ

### Phylogenetic diversity measurements

In community ecology, phylogenies are sometimes used to compute a metric of diversity over a set of species (e.g., total tree length), that may be used to compare the complexity of one community with another. For instance, Duarte (2011) identified the species in 30 forest patches in Brazilian grasslands. As part of a larger analysis of factors affecting patch size, he computed measures of phylogenetic diversity, including NRI implemented in the Phylocom package (Webb and Donoghue), and another method devised by Pillar and Duarte (2010). The process of getting a species tree and computing diversity is iterated for each forest patch to be analyzed.

*   **1\. Gather species names**. The list of species is the list of woody sapling species identified in a forest patch.
*   **2\. Clean species names**. There is no information on whether names were validated.
*   **3\. Identify phylogeny source**. Duarte chose a tree available via Phylomatic, based on the APG tree, presumably based on considerations of quality and coverage.
*   **4\. Obtain subtree**. The subtree was obtained via interactive use of Phylomatic (Webb and Donoghue, 2005). Note that Phylomatic performs **taxonomic grafting** in addition to pruning. If a species is not present, it will be added at the lowest possible level based on a taxonomic match, e.g., a species will be added at the genus level if the genus is included in the source tree.
*   **5\. Scale subtree**. Duarte states: "Tree branch lengths were obtained through the BLADJ module of Phylocom 4.1, using clade age estimates provided by Wikström et al. (2001)"

#### References

*   Duarte LdS. 2011\. Phylogenetic habitat filtering influences forest nucleation in grasslands. Oikos 120: 208-215\. doi: 10.1111/j.1600-0706.2010.18898.x
*   Webb CO and Donoghue MJ. 2005\. Phylomatic: tree assembly for applied phylogenetics. Molecular Ecology Notes 5: 181–183 doi: doi: 10.1111/j.1471-8286.2004.00829.x

### Another example

*   **1\. Gather species names**.
*   **2\. Clean species names**.
*   **3\. Identify phylogeny source**.
*   **4\. Obtain subtree**.
*   **5\. Scale subtree**.

#### References
